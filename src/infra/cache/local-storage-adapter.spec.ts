import faker from 'faker'
import 'jest-localstorage-mock'
import { LoacalStorageAdatapter } from './local-storage-adatper'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('Should call localStorage with correct values', async () => {
    const sut = new LoacalStorageAdatapter()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
