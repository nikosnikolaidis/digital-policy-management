package gr.uom.strategicplanning.controllers.entities;


import java.util.List;

public class IndicatorCreation {
    private String indicatorName;
    private String equation;
    private List<String> metricList;

    public IndicatorCreation(String indicatorName, String equation, List<String> metricList) {
        this.indicatorName = indicatorName;
        this.equation = equation;
        this.metricList = metricList;
    }

    public String getIndicatorName() {
        return indicatorName;
    }

    public void setIndicatorName(String indicatorName) {
        this.indicatorName = indicatorName;
    }

    public String getEquation() {
        return equation;
    }

    public void setEquation(String equation) {
        this.equation = equation;
    }

    public List<String> getMetricList() {
        return metricList;
    }

    public void setMetricList(List<String> metricList) {
        this.metricList = metricList;
    }
}
