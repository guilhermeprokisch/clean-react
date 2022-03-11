import { MinLengthValidation } from './min-length'
import { InvalidFieldError } from '@/validation/erros'

describe('MinLengthValidation', () => {
  it('Should return error if value is valid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
})
