package gr.uom.strategicplanning.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
public class Metric {
    @Id
    @GeneratedValue
    private Long id;
    private String metricName;
    private String metricSymbol;
    @ManyToMany(mappedBy = "metricList")
    @JsonIgnore
    private List<Indicator> indicatorList;

    public Metric() {
    }

    public Metric(String metricName, String metricSymbol) {
        this.metricName = metricName;
        this.metricSymbol = metricSymbol;
    }

    public void addIndicator(Indicator indicator){
        this.indicatorList.add(indicator);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMetricName() {
        return metricName;
    }

    public void setMetricName(String metricName) {
        this.metricName = metricName;
    }

    public String getMetricSymbol() {
        return metricSymbol;
    }

    public void setMetricSymbol(String metricSymbol) {
        this.metricSymbol = metricSymbol;
    }

    public List<Indicator> getIndicatorList() {
        return indicatorList;
    }

    public void setIndicatorList(List<Indicator> indicatorList) {
        this.indicatorList = indicatorList;
    }
}
