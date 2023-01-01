<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBettingsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bettings', function (Blueprint $table) {
            $table->id('id');
            $table->string('type');
            $table->integer('qntGames');
            $table->integer('qntDezenas');
            $table->integer('concurso');
            $table->integer('qntCota');
            $table->integer('qntTotalCota');
            $table->string('vlCota');
            $table->string('vlPremio');
            $table->string('dtPremio');
            $table->text('base64Img');
            $table->string('color');
            $table->integer('userId');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('bettings');
    }
}
