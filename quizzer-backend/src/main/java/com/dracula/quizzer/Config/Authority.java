package com.dracula.quizzer.Config;

import com.dracula.quizzer.Enum.RoleEnum;
import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority {


    private RoleEnum role;

    public Authority(RoleEnum role) {
        this.role = role;
    }

    @Override
    public String getAuthority() {
       return role.toString();
    }
}
