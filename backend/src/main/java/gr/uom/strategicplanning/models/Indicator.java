package gr.uom.strategicplanning.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Indicator {
    @Id
    @GeneratedValue
    private Long id;
    private String indicatorName;
    private String equation;
    @ManyToMany
    @JoinTable(name="indicator_metric",
            joinColumns = @JoinColumn(name="indicator_name"),
            inverseJoinColumns = @JoinColumn(name="metric_name"))
    private List<Metric> metricList;

    public Indicator() {
    }

    public Indicator(String indicatorName, String equation) {
        this.indicatorName = indicatorName;
        this.equation = equation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<Metric> getMetricList() {
        return metricList;
    }

    public void setMetricList(List<Metric> metricList) {
        this.metricList = metricList;
    }
}
