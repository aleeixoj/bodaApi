import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindNotConfirmedsUseCase } from './FindNotConfirmedsUseCase';

class FindNotConfirmedsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findNotConfirmedsUseCase = container.resolve(
      FindNotConfirmedsUseCase
    );
    const confirmeds = await findNotConfirmedsUseCase.execute();

    return response.status(200).send(confirmeds);
  }
}
export { FindNotConfirmedsController };
