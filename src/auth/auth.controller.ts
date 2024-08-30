import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller({})
export class AuthController {
    // constructor(private authService: AuthService) {}
    authService: AuthService;
    constructor(authService: AuthService) {
        this.authService = authService;
    }

}