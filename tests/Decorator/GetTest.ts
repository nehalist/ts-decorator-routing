import 'reflect-metadata';
import {expect} from 'chai';
import {Get, RouteDefinition} from '../../src';

describe('GetTest', () => {
  it('should properly attach routes', () => {
    class Foo {
      @Get('path')
      public bar() {}
    }

    expect(Reflect.getMetadata('prefix', Foo)).to.be.undefined;

    const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', Foo);

    expect(routes).to.be.an.instanceOf(Array);
    expect(routes.length).to.equal(1);
    expect(routes[0].methodName).to.equal('bar');
    expect(routes[0].path).to.equal('path');
    expect(routes[0].requestMethod).to.equal('get');
  });
});
