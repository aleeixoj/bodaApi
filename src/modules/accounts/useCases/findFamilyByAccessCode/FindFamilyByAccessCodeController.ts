import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { FindFamilyByAccessCodeUseCase } from './FindFamilyByAccessCodeUseCase';

class FindFamilyByAccessCodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const code = request.headers.access_code as string;
    const findFamilyByAccessCodeUseCase = container.resolve(
      FindFamilyByAccessCodeUseCase
    );

    const family = await findFamilyByAccessCodeUseCase.execute(code);

    return response.status(200).json(family);
  }
}
export { FindFamilyByAccessCodeController };
