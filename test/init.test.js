import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';

chai.use(chaiHttp);

describe('Setup test', () => {
  it('Should return 200', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
