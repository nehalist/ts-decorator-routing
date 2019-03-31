import {Controller} from '../src';
import {Get} from '../src';
import {Request, Response} from 'express';

@Controller('/user')
export default class UserController {
  @Get('/')
  public index(req: Request, res: Response) {
    return res.send('User overview');
  }

  @Get('/:name')
  public details(req: Request, res: Response) {
    return res.send(`You are looking at the profile of ${req.params.name}`);
  }
}
