package gr.uom.strategicplanning.config;

import gr.uom.strategicplanning.models.User;
import gr.uom.strategicplanning.models.euproject.Project;
import gr.uom.strategicplanning.repositories.UserRepository;
import gr.uom.strategicplanning.repositories.euproject.ProjectRepository;
import gr.uom.strategicplanning.services.UserPrivilegedService;
import gr.uom.strategicplanning.services.UserService;
import gr.uom.strategicplanning.services.euproject.OrganizationService;
import gr.uom.strategicplanning.services.euproject.ProjectService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Optional;

@Configuration
public class Config {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository, UserService userService,
                                        UserPrivilegedService userPrivilegedService, OrganizationService organizationService,
                                        ProjectService projectService, ProjectRepository projectRepository){
        return args -> {
            //Create admin user
            Optional<User> userOptional = userRepository.findByEmail("admin@uom.gr");
            if(!userOptional.isPresent()){
                User admin = new User("Admin","admin@uom.gr","admin");
                userService.createUser(admin);
                userPrivilegedService.verifyUser("admin@uom.gr");
                userPrivilegedService.givePrivilegeToUser("admin@uom.gr");

            }

            //Get all eu projects and organization
            projectService.addProjects();
            System.out.println("--- EU projects added");

            organizationService.addOrganizations();
            System.out.println("--- EU Organizations and connections with projects added");


            organizationService.getOrganizationWithName("UNIVERSITY OF MACEDONIA");
        };
    }
}
