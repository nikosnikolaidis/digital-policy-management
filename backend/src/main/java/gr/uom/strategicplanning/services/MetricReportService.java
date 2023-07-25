package gr.uom.strategicplanning.services;

import gr.uom.strategicplanning.controllers.entities.MetricUpdateReport;
import gr.uom.strategicplanning.models.Indicator;
import gr.uom.strategicplanning.models.IndicatorReport;
import gr.uom.strategicplanning.models.Metric;
import gr.uom.strategicplanning.models.MetricReport;
import gr.uom.strategicplanning.repositories.IndicatorReportRepository;
import gr.uom.strategicplanning.repositories.MetricReportRepository;
import gr.uom.strategicplanning.repositories.MetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.Date;
import java.util.List;

@Service
public class MetricReportService {

    @Autowired
    MetricReportRepository metricReportRepository;
    @Autowired
    MetricRepository metricRepository;
    @Autowired
    IndicatorReportRepository indicatorReportRepository;

    public List<MetricReport> getAllByDate(Date date){
        return metricReportRepository.findAllByDate(date);
    }

    public List<MetricReport> getAllByDateBetween(Date date1, Date date2){
        return metricReportRepository.findAllByDateBetween(date1, date2);
    }

    public List<MetricReport> getAllMetricReports(){
        return metricReportRepository.findAll();
    }

    public List<MetricReport> getAllMetricReportsByMetricName(String name){
        return metricReportRepository.findAllByMetricMetricName(name);
    }

    public MetricReport createMetricReport(MetricUpdateReport metricUpdateReport){
        Metric metric = metricRepository.findByMetricName(metricUpdateReport.getMetricName())
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Metric with name "+metricUpdateReport.getMetricName()+" doesn't exist");
                });
        MetricReport metricReport = new MetricReport(metricUpdateReport.getDate(), metric, metricUpdateReport.getValue());
        metricReportRepository.save(metricReport);

        //update all indicators that have this metric
        // by creating a IndicatorReport for each one
        for(Indicator i:metric.getIndicatorList()){
            Double value = calculateIndicator(i);
            IndicatorReport indicatorReport = new IndicatorReport(metricUpdateReport.getDate(), i, value);
            indicatorReportRepository.save(indicatorReport);
        }

        return metricReport;
    }

    private Double calculateIndicator(Indicator i) {
        //change metrics with their last value
        String[] equation = i.getEquation().split(" ");
        String equationToSolve = "";
        List<Metric> metricList = metricRepository.findAll();
        for (String str:equation){
            boolean isMetric = false;
            for(Metric metric: metricList){
                if(metric.getMetricSymbol().equals(str)){
                    //get last value of this metric
                    MetricReport metricReport = metricReportRepository.findTopByMetricMetricSymbol(metric.getMetricSymbol());
                    equationToSolve += metricReport.getValue();
                    isMetric = true;
                }
            }
            if(!isMetric){
                equationToSolve += str;
            }
        }


        //calculate simple alternative
        ScriptEngineManager mgr = new ScriptEngineManager();
        ScriptEngine engine = mgr.getEngineByName("graal.js");
        String stringResult;
        try {
            stringResult = engine.eval(equationToSolve).toString();
            return Double.parseDouble(stringResult);
        } catch (ScriptException e) {
            e.printStackTrace();
        }
        return 0.0;
    }
}
