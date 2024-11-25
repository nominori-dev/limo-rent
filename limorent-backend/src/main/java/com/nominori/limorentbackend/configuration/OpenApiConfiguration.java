package com.nominori.limorentbackend.configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
        info = @Info(
                title = "LimousineRent API",
                description = "Public API of the LimousineRent service.",
                contact = @Contact(
                        name = "GitHub",
                        url = "https://github.com/nominori-dev/limo-rent"
                )
        )
)
public class OpenApiConfiguration {
}
