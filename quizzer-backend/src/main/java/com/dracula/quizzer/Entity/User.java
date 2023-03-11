package com.dracula.quizzer.Entity;

import com.dracula.quizzer.Enum.RoleEnum;
import com.dracula.quizzer.Config.Authority;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "User")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true,nullable = false)
    private String username;

    private String password;
    private String firstName;
    private String lastName;

    @Column(nullable = false,unique = true)
    private String emailId;

    private String phone;
    private Boolean enabled= true;
    private String profile="default.png";

    @Enumerated(EnumType.STRING)
    private RoleEnum userRole = RoleEnum.NORMAL;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        HashSet<Authority> authority = new HashSet<>();
        authority.add(new Authority(userRole));
        return authority;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
