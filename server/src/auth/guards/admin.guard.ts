import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class OnlyAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest<{ user: User }>();

    if (!user?.role || user.role !== 'ADMIN') {
      throw new ForbiddenException('You don\t have rights!');
    }

    return true;
  }
  
}
