package gr.uom.strategicplanning.services.euproject;

import gr.uom.strategicplanning.models.euproject.Organization;
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
import java.util.List;
import java.util.Optional;

@Service
public class OrganizationService {

    @Autowired
    OrganizationRepository organizationRepository;
    @Autowired
    ProjectRepository projectRepository;

    @Transactional
    public List<Organization> getAllOrganization(){
        return organizationRepository.findAll();
    }

    @Transactional
    public Organization getOrganizationWithName(String name){
        Organization organization = organizationRepository.findByName(name)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Organization with name "+name+" doesn't exist");
                });
        return organization;
    }

    @Transactional
    public void addOrganizations() throws IOException {
        String[] HEADERS = { "projectRcn","projectID","projectAcronym","role","id","name","shortName","activityType",
                "endOfParticipation","ecContribution","country","street","city","postCode","organizationUrl","vatNumber",
                "contactForm","contactType","contactTitle","contactFirstNames","contactLastNames","contactFunction",
                "contactTelephoneNumber","contactFaxNumber" };
        Resource resource = new ClassPathResource("cordis-h2020organizations.csv");
        Reader in = new FileReader(resource.getFile());

        CSVFormat csvFormat = CSVFormat.DEFAULT.builder()
                .setDelimiter(";")
                .setHeader(HEADERS)
                .setSkipHeaderRecord(true)
                .build();

        Iterable<CSVRecord> records = csvFormat.parse(in);

        //for each record in the csv
        for (CSVRecord record : records) {
            Organization organizationOptional = organizationRepository.findById(Long.parseLong(record.get("id"))).orElse(null);
            Project projectOptional = projectRepository.findById(Long.parseLong(record.get("projectID"))).orElse(null);

            //if the organization does not exist
            if (organizationOptional == null) {
                Organization organization = new Organization(Long.parseLong(record.get("id")),record.get("name"),
                        record.get("shortName"),record.get("country"),record.get("street"),record.get("city"),
                        record.get("postCode"),record.get("organizationUrl"),record.get("vatNumber"));

                if(projectOptional != null){
                    if(record.get("role").equals("coordinator")){
                        projectOptional.setCoordinator(organization);
                        organization.addCoordination(projectOptional);
                    }
                    else if (record.get("role").equals("partner") || record.get("role").equals("participant")){
                        projectOptional.addParticipants(organization);
                        organization.addProjects(projectOptional);
                    }
                }
                else {
                    System.err.println("projectID: " + organization.getId() );
                }

                organizationRepository.save(organization);
            }
            else {
                if(projectOptional != null){
                    if(record.get("role").equals("coordinator")){
                        projectOptional.setCoordinator(organizationOptional);
                        organizationOptional.addCoordination(projectOptional);
                    }
                    else if (record.get("role").equals("partner") || record.get("role").equals("participant")){
                        projectOptional.addParticipants(organizationOptional);
                        organizationOptional.addProjects(projectOptional);
                    }
                }
                else {
                    System.err.println("projectID: " + record.get("id") );
                }
            }

        }
    }
}
