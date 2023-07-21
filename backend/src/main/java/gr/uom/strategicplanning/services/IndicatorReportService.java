package gr.uom.strategicplanning.services;

import gr.uom.strategicplanning.models.IndicatorReport;
import gr.uom.strategicplanning.models.MetricReport;
import gr.uom.strategicplanning.repositories.IndicatorReportRepository;
import gr.uom.strategicplanning.repositories.IndicatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndicatorReportService {

    @Autowired
    IndicatorReportRepository indicatorReportRepository;

    public List<IndicatorReport> getAllIndicatorReports(){
        return indicatorReportRepository.findAll();
    }

    public List<IndicatorReport> getAllIndicatorReportsByIndicatorName(String name){
        return indicatorReportRepository.findAllByIndicatorIndicatorName(name);
    }
}
