package gr.uom.strategicplanning.services;

import gr.uom.strategicplanning.models.Indicator;
import gr.uom.strategicplanning.models.Metric;
import gr.uom.strategicplanning.repositories.MetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MetricService {

    @Autowired
    MetricRepository metricRepository;

    public List<Metric> getAllMetrics(){
        return metricRepository.findAll();
    }

    public Metric getMetricWithName(String name){
        Metric metric = metricRepository.findByMetricName(name)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Metric with name "+name+" doesn't exist");
                });
        return metric;
    }

    public Metric getMetricWithSymbol(String symbol){
        Metric metric = metricRepository.findByMetricSymbol(symbol)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Metric with symbol "+symbol+" doesn't exist");
                });
        return metric;
    }

    public Metric createMetric(Metric metric){
        Optional<Metric> metricOptional1 = metricRepository.findByMetricName(metric.getMetricName());
        Optional<Metric> metricOptional2 = metricRepository.findByMetricSymbol(metric.getMetricSymbol());
        if(!metricOptional1.isPresent() && !metricOptional2.isPresent()){
            metric.setIndicatorList(new ArrayList<>());
            metricRepository.save(metric);
            return metric;
        }
        throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Name or Symbol is used from another metric");
    }
}
