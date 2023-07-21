package gr.uom.strategicplanning.controllers;

import gr.uom.strategicplanning.controllers.entities.MetricUpdateReport;
import gr.uom.strategicplanning.models.IndicatorReport;
import gr.uom.strategicplanning.models.MetricReport;
import gr.uom.strategicplanning.services.IndicatorReportService;
import gr.uom.strategicplanning.services.IndicatorService;
import gr.uom.strategicplanning.services.MetricReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")
public class ReportController {

    @Autowired
    MetricReportService metricReportService;

    @Autowired
    IndicatorReportService indicatorReportService;



    @PostMapping("/metric")
    MetricReport createMetricReport(@RequestBody MetricUpdateReport metricUpdateReport){
        return metricReportService.createMetricReport(metricUpdateReport);
    }

    @GetMapping("/metric")
    List<MetricReport> getAllMetricReportsByMetricName(@RequestParam String metricName){
        return metricReportService.getAllMetricReportsByMetricName(metricName);
    }

    @GetMapping("/metric/all")
    List<MetricReport> getAllMetricReports(){
        return metricReportService.getAllMetricReports();
    }


    @GetMapping("/indicator")
    List<IndicatorReport> getAllIndicatorReportsByIndicatorName(@RequestParam String indicatorName){
        return indicatorReportService.getAllIndicatorReportsByIndicatorName(indicatorName);
    }

    @GetMapping("/indicator/all")
    List<IndicatorReport> getAllIndicatorReports(){
        return indicatorReportService.getAllIndicatorReports();
    }

}
