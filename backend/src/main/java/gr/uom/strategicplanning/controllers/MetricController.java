package gr.uom.strategicplanning.controllers;

import gr.uom.strategicplanning.models.Metric;
import gr.uom.strategicplanning.services.MetricService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/metric")
public class MetricController {

    @Autowired
    MetricService metricService;

    @GetMapping("/all")
    List<Metric> getAllMetrics(){
        return metricService.getAllMetrics();
    }

    @GetMapping
    Metric getMetric(@RequestParam(required = false) String name,@RequestParam(required = false) String symbol){
        if(name!=null){
            return metricService.getMetricWithName(name);
        }
        if(symbol!=null){
            return metricService.getMetricWithSymbol(symbol);
        }
        return null;
    }

    @PostMapping
    Metric createMetric(@RequestBody Metric metric){
        return metricService.createMetric(metric);
    }

}
