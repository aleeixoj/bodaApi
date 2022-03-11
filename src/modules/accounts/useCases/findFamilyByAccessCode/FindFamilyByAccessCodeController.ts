import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindConfirmedByFamilyUseCase } from '../FindConfirmedByFamily/FindConfirmedByFamilyUseCase';

class FindFamilyByAccessCodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const code = request.headers.access_code as string;
    const findFamilyByAccessCodeUseCase = container.resolve(
      FindConfirmedByFamilyUseCase
    );

    const family = await findFamilyByAccessCodeUseCase.execute(code);

    return response.status(200).json(family);
  }
}
export { FindFamilyByAccessCodeController };
