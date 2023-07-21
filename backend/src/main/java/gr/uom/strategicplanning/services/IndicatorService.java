package gr.uom.strategicplanning.services;

import gr.uom.strategicplanning.controllers.entities.IndicatorCreation;
import gr.uom.strategicplanning.models.Indicator;
import gr.uom.strategicplanning.models.Metric;
import gr.uom.strategicplanning.repositories.IndicatorRepository;
import gr.uom.strategicplanning.repositories.MetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class IndicatorService {

    @Autowired
    IndicatorRepository indicatorRepository;
    @Autowired
    MetricRepository metricRepository;

    public List<Indicator> getAllIndicators(){
        return indicatorRepository.findAll();
    }

    public Indicator getIndicatorWithName(String name){
        Indicator indicator = indicatorRepository.findByIndicatorName(name)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Indicator with name "+name+" doesn't exist");
                });
        return indicator;
    }

    @Transactional
    public Indicator createIndicator(IndicatorCreation indicatorCreation){
        Optional<Indicator> indicatorOptional = indicatorRepository.findByIndicatorName(indicatorCreation.getIndicatorName());
        if(!indicatorOptional.isPresent()){
            Indicator indicator = new Indicator(indicatorCreation.getIndicatorName(), indicatorCreation.getEquation());
            indicatorRepository.save(indicator);

            List<Metric> metricList=new ArrayList<>();
            for(String m:indicatorCreation.getMetricList()){
                Optional<Metric> metricOptional = metricRepository.findByMetricName(m);
                if(metricOptional.isPresent()){
                    metricOptional.get().addIndicator(indicator);
                    metricList.add(metricOptional.get());
                }
            }
            indicator.setMetricList(metricList);
            return indicator;
        }
        throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Name is used from another indicator");
    }

}
