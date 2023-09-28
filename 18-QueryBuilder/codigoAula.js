    //select * from agenda
    //const agenda = await knex('agenda').debug();//debug mostra o sql que foi executado
    //const agenda = await knex.raw('select * from agenda');
    //const agenda = await knex('agenda').where('id', '!=', 5).debug();
    //const agenda = await knex('agenda').where({id:5}).debug();

    //const agenda = await knex('agenda').where({id:5}).first().debug();
    //first() retorna apenas o primeiro registro

    //const agenda = await knex('agenda').where({id:5}).select('id', 'nome').first().debug();

    //select * from agenda where email is null
    //const agenda = await knex('agenda').whereNull('email').debug();

    //select * from agenda where email is not null
    //const agenda = await knex('agenda').whereNotNull('email').debug();

    //select * from agenda where id between 5 and 10
    //const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();

    //const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();

    //const agenda = await knex('agenda').distinct('email', 'nome').debug();

    //select email from agenda group by email
    //const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
    // agrupar por email e contar quantos registros tem por email

    //const agenda = await knex('agenda').limit(5).offset(2).debug();

    //const agenda = await knex('agenda').whereNull('email').count().debug();
    
    //const agenda = await knex('agenda').whereNull('email').sum('id').debug();

    //const agenda = await knex('agenda').whereNull('email').avg('id').debug();

    //const agenda = await knex('agenda').whereNull('email').min('id').debug();

    //const agenda = await knex('agenda').whereNull('email').max('id').debug();

     //const quantidadeMedicamentos = await knex('farmacia').count();

    //const usuarioMaisNovo = await knex('usuarios').min('idade');
   


    //Index.js
 //   const somaCategoria = await knex('farmacia')
 //  .select('categoria')
 //   .sum('estoque')
 //   .whereNotNull('categoria')
 //   .groupBy('categoria')
 //   .debug();

 //const categoriaNull = await knex('farmacia').whereNull('categoria').count();

 //const quantidadeCategoria = await knex('farmacia')
 //   .select('categoria')
 //   .count()
 //   .whereNotNull('categoria')
 //   .groupBy('categoria')
 //   .debug();

 //const quantidadeUsuarios = await knex('usuarios')
 //.select('idade')
 //.count()
 //.where('idade', '>=', 18)
 //.groupBy('idade')
 //.debug();

  //  return res.json(quantidadeUsuarios);