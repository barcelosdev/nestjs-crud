import { NestMiddleware } from "@nestjs/common";
export declare class AppMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void): void;
}
