import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindConfirmedByFamilyUseCase } from './FindConfirmedByFamilyUseCase';

class FindConfirmedByFamilyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findConfirmedByFamilyUseCase = container.resolve(
      FindConfirmedByFamilyUseCase
    );
    const confirmeds = await findConfirmedByFamilyUseCase.execute(id);

    return response.status(200).send(confirmeds);
  }
}
export { FindConfirmedByFamilyController };
