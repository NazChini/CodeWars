// In this kata, your job is to create a class Dictionary which you can add words to and their entries.
// FUNDAMENTALS | CLASSES | BASIC LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING

class Dictionary {
  constructor() {
    this.dict = {}
  }
  
  newEntry(key, value) {
    this.dict[key] = value
  }
  
  look(key) {
    return this.dict[key] || `Can\'t find entry for ${key}`
  }
}
