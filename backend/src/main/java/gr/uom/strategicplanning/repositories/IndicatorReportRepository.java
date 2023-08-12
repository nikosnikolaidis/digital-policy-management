package gr.uom.strategicplanning.repositories;

import gr.uom.strategicplanning.models.IndicatorReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IndicatorReportRepository extends JpaRepository<IndicatorReport, Long> {
    List<IndicatorReport> findAllByDate(Date date);
    List<IndicatorReport> findAllByDateBetween(Date dateStart, Date dateEnd);
    List<IndicatorReport> findAllByIndicatorName(String name);
    IndicatorReport findTopByIndicatorSymbol(String metricSymbol);
}
