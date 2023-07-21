package gr.uom.strategicplanning.controllers;

import gr.uom.strategicplanning.controllers.entities.IndicatorCreation;
import gr.uom.strategicplanning.models.Indicator;
import gr.uom.strategicplanning.services.IndicatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/indicator")
public class IndicatorController {

    @Autowired
    IndicatorService indicatorService;

    @GetMapping("/all")
    List<Indicator> getAllIndicators(){
        return indicatorService.getAllIndicators();
    }

    @GetMapping
    Indicator getIndicator(@RequestParam String name){
        return indicatorService.getIndicatorWithName(name);
    }

    @PostMapping
    Indicator createIndicator(@RequestBody IndicatorCreation indicatorCreation){
        return indicatorService.createIndicator(indicatorCreation);
    }
}
