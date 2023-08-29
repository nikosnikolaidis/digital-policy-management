package gr.uom.strategicplanning.services.euproject;

import gr.uom.strategicplanning.models.euproject.Project;
import gr.uom.strategicplanning.repositories.euproject.OrganizationRepository;
import gr.uom.strategicplanning.repositories.euproject.ProjectRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    OrganizationRepository organizationRepository;

    @Transactional
    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    @Transactional
    public Project getProjectWithTitle(String title){
        Project project = projectRepository.findByTitle(title)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Project with title "+title+" doesn't exist");
                });
        return project;
    }

    @Transactional
    public void addProjects() throws IOException, ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String[] HEADERS = { "rcn","id","acronym","status","programme","topics","frameworkProgramme","title",
                "startDate","endDate","projectUrl","objective","totalCost","ecMaxContribution","call","fundingScheme",
                "coordinator","coordinatorCountry","participants","participantCountries","subjects" };
        Resource resource = new ClassPathResource("cordis-h2020projects.csv");
        Reader in = new FileReader(resource.getFile());

        CSVFormat csvFormat = CSVFormat.DEFAULT.builder()
                .setDelimiter(";")
                .setHeader(HEADERS)
                .setSkipHeaderRecord(true)
                .build();

        Iterable<CSVRecord> records = csvFormat.parse(in);

        //for each record in the csv
        for (CSVRecord record : records) {
            Date startDate = null;
            if(!record.get("startDate").isEmpty()) {
                startDate = sdf.parse(record.get("startDate"));
            }
            Date endDate = null;
            if(!record.get("endDate").isEmpty()) {
                endDate = sdf.parse(record.get("endDate"));
            }
            Project project = new Project(Long.parseLong(record.get("id")),record.get("acronym"),record.get("title"),
                    startDate,endDate,record.get("objective"),record.get("totalCost"),record.get("programme"),
                    record.get("topics"),record.get("frameworkProgramme"),record.get("call"),record.get("fundingScheme"));

            projectRepository.save(project);
        }
    }

}
