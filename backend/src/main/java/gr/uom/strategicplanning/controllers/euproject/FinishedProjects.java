package gr.uom.strategicplanning.controllers.euproject;

import gr.uom.strategicplanning.controllers.entities.ProjectSlim;
import gr.uom.strategicplanning.models.euproject.Organization;
import gr.uom.strategicplanning.models.euproject.Project;
import gr.uom.strategicplanning.services.euproject.OrganizationService;
import gr.uom.strategicplanning.services.euproject.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

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

    @GetMapping("/organization/toppartners")
    HashMap<Organization,Integer> getTopPartners(@RequestParam String orgId){
        return organizationService.getTopPartners(orgId);
    }



    @GetMapping("/project")
    Project getProject(@RequestParam String title){
        return projectService.getProjectWithTitle(title);
    }

}
