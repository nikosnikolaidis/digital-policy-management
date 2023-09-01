package gr.uom.strategicplanning.controllers.euproject;

import gr.uom.strategicplanning.controllers.entities.ProjectSlim;
import gr.uom.strategicplanning.models.euproject.Organization;
import gr.uom.strategicplanning.models.euproject.Project;
import gr.uom.strategicplanning.services.euproject.OrganizationService;
import gr.uom.strategicplanning.services.euproject.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/euproject/finished/")
public class FinishedProjects {

    @Autowired
    ProjectService projectService;

    @Autowired
    OrganizationService organizationService;

    @GetMapping("/organization")
    Organization getOrganization(@RequestParam String name){
        return organizationService.getOrganizationWithName(name);
    }

    @GetMapping("/organization/projectsCoordinated")
    List<ProjectSlim> getProjectsCoordinatedByOrg(@RequestParam String orgId){
        return organizationService.getProjectsCoordinatedByOrg(orgId);
    }

    @GetMapping("/organization/projectsParticipated")
    List<ProjectSlim> getProjectsParticipatedOrg(@RequestParam String orgId){
        return organizationService.getProjectsParticipatedOrg(orgId);
    }

    @GetMapping("/organization/topPartners")
    HashMap<Organization,Integer> getTopPartners(@RequestParam String orgId){
        return organizationService.getTopPartners(orgId);
    }




    @GetMapping("/project")
    Project getProject(@RequestParam String title){
        return projectService.getProjectWithTitle(title);
    }

    @GetMapping("/project/all")
    ResponseEntity<Map<String, Object>> getAllProjects(@RequestParam(required = false) String contain,
                                                       @RequestParam(defaultValue = "0") int page,
                                                       @RequestParam(defaultValue = "100") int size){
        return projectService.getAllProjects(contain,page,size);
    }

}
