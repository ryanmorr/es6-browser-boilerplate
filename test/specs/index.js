import foo from '../../src/index';

describe('foo', () => {
    it('should return foo', () => {
        const fooSpy = sinon.spy(foo);

        expect(fooSpy()).to.equal('foo');
        expect(fooSpy.called).to.equal(true);
    });
});
