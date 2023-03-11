package com.dracula.quizzer.Enum;

import com.fasterxml.jackson.annotation.JsonCreator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;


public enum RoleEnum  {
    ADMIN,NORMAL;

    @JsonCreator
    public static RoleEnum getPlatformTypeFromJsonRequest(String userRole) throws Exception {
        userRole = userRole.toUpperCase();

        for(RoleEnum role:  RoleEnum.values()){
            if(userRole.equals(role.toString())){
                return role;
            }
        }
        throw  new Exception("Provide valid User Role");

    }

}
