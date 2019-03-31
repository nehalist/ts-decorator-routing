import 'reflect-metadata';
import {expect} from 'chai';
import {Controller} from '../../src';

describe('ControllerTest', () => {
  it('should have no metadata initially', () => {
    class Foo {}

    expect(Reflect.getMetadata('prefix', Foo)).to.be.undefined;
    expect(Reflect.getMetadata('routes', Foo)).to.be.undefined;
  });

  it('should have a prefix and empty routes', () => {
    @Controller('foo')
    class Foo {}

    expect(Reflect.getMetadata('prefix', Foo)).to.equal('foo');
    expect(Reflect.getMetadata('routes', Foo)).to.be.an.instanceOf(Array);
    expect(Reflect.getMetadata('routes', Foo).length).to.equal(0);
  });
});
