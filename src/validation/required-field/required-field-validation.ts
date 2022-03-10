import { RequiredFieldError } from '../erros/'
import { FieldValidation } from '../protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return new RequiredFieldError()
  }
}
