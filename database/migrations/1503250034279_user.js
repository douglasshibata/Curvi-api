'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().unique()
      // Dados Obrigatórios
      table.string('name', 255).notNullable()
      table.integer("age").notNullable()
      table.string('email', 255).notNullable().unique()
      table.text('address').notNullable()
      table.string('cellphone', 20).notNullable()
      table.string('state', 4).notNullable()
      table.string('city', 255).notNullable()
      table.string('area',100).notNullable()
      table.text('goal').notNullable()
      table.string('area_level').notNullable()
      table.string('scholarity').notNullable()
      table.string('courseName').notNullable()
      table.string('courseSchool').notNullable()
      //Dados Opcionais
      table.string('linkedln_link')
      table.string('courseEndYear')
      table.string('companyOccupation')
      table.string('companyName')
      table.string('companyStartEnd')
      table.string('companyDescription')   
      table.text('courses')
      table.text('cientificResearch')
      table.string('companyNameVolunteer')
      table.string('companyStartEndVolunteer')
      table.string('companyDescriptionVolunteer')
      table.string('companyOccupationVolunteer')
      table.string('language')
      table.string('language_level')
      table.text('feedback')
      table.integer("grade")
      //table.string('password', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
