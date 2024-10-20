package com.solteq.harjoitus.dents.dao;

import com.solteq.harjoitus.dents.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(path="users")
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);
}
