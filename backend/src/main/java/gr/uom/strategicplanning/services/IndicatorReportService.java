package gr.uom.strategicplanning.services;

import gr.uom.strategicplanning.controllers.entities.IndicatorUpdateReport;
import gr.uom.strategicplanning.models.Metric;
import gr.uom.strategicplanning.models.MetricReport;
import gr.uom.strategicplanning.models.Indicator;
import gr.uom.strategicplanning.models.IndicatorReport;
import gr.uom.strategicplanning.repositories.MetricReportRepository;
import gr.uom.strategicplanning.repositories.IndicatorReportRepository;
import gr.uom.strategicplanning.repositories.IndicatorRepository;
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
public class IndicatorReportService {

    @Autowired
    IndicatorReportRepository indicatorReportRepository;
    @Autowired
    IndicatorRepository indicatorRepository;
    @Autowired
    MetricReportRepository MetricReportRepository;

    public List<IndicatorReport> getAllByDate(Date date){
        return indicatorReportRepository.findAllByDate(date);
    }

    public List<IndicatorReport> getAllByDateBetween(Date date1, Date date2){
        return indicatorReportRepository.findAllByDateBetween(date1, date2);
    }

    public List<IndicatorReport> getAllIndicatorReports(){
        return indicatorReportRepository.findAll();
    }

    public List<IndicatorReport> getAllIndicatorReportsByIndicatorName(String name){
        return indicatorReportRepository.findAllByIndicatorName(name);
    }

    public IndicatorReport createIndicatorReport(IndicatorUpdateReport indicatorUpdateReport){
        Indicator indicator = indicatorRepository.findByName(indicatorUpdateReport.getName())
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Indicator with name "+indicatorUpdateReport.getName()+" doesn't exist");
                });
        IndicatorReport indicatorReport = new IndicatorReport(indicatorUpdateReport.getDate(), indicator, indicatorUpdateReport.getValue());
        indicatorReportRepository.save(indicatorReport);

        //update all indicators that have this metric
        // by creating a IndicatorReport for each one
        for(Metric i: indicator.getMetricList()){
            Double value = calculateMetric(i);
            MetricReport metricReport = new MetricReport(indicatorUpdateReport.getDate(), i, value);
            MetricReportRepository.save(metricReport);
        }

        return indicatorReport;
    }

    private Double calculateMetric(Metric i) {
        //change metrics with their last value
        String[] equation = i.getEquation().split(" ");
        String equationToSolve = "";
        List<Indicator> indicatorList = indicatorRepository.findAll();
        for (String str:equation){
            boolean isIndicator = false;
            for(Indicator indicator : indicatorList){
                if(indicator.getSymbol().equals(str)){
                    //get last value of this metric
                    IndicatorReport indicatorReport = indicatorReportRepository.findTopByIndicatorSymbol(indicator.getSymbol());
                    equationToSolve += indicatorReport.getValue();
                    isIndicator = true;
                }
            }
            if(!isIndicator){
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
