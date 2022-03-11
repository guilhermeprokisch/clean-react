import { RequiredFieldError } from '@/validation/erros'
import { FieldValidation } from '@/validation/validators/required-field/required-field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
