package gr.uom.strategicplanning.controllers.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class MetricUpdateReport {
    @JsonFormat(
            shape = JsonFormat.Shape.STRING,
            pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS")
    private Date date;
    private String metricName;
    private Double value;

    public MetricUpdateReport(Date date, String metricName, Double value) {
        this.date = date;
        this.metricName = metricName;
        this.value = value;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getMetricName() {
        return metricName;
    }

    public void setMetricName(String metricName) {
        this.metricName = metricName;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}
