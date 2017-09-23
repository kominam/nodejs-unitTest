import { assert, expect } from 'chai';
import { stub } from 'sinon';
import request from 'supertest';
import server from '../server';
import Todo from '../models/Todo';

describe('TodoController Unit Test', () => {
  it('should get todos', () => {
    const findAllTodoStub = stub(Todo, 'find').yields(undefined, [
      {
        _id: '59c60a137c02831d3f45f771',
        content: 'Nodejs Learning Curve ',
        __v: 0,
        isComplete: false
      }
    ]);
    findAllTodoStub.withArgs({});

    request(server)
      .get('/api/v1/todos')
      .expect(200, {
        data: [
          {
            _id: '59c60a137c02831d3f45f771',
            content: 'Nodejs Learning Curve ',
            __v: 0,
            isComplete: false
          }
        ]
      });
      findAllTodoStub.restore();
  });
  it('can not get all because something went wrong with our database' ,() => {
    const findAllTodoStub = stub(Todo, 'find').yields(new Error('Request to DB timeout'), undefined);
    findAllTodoStub.withArgs({});

    request(server)
      .get('/api/v1/todos')
      .expect(500, {
        err: 'Request to DB timeout'
      });
      findAllTodoStub.restore();
  })
});
