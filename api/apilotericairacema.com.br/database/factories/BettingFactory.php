<?php

namespace Database\Factories;

use App\Models\Betting;
use Illuminate\Database\Eloquent\Factories\Factory;

class BettingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Betting::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'type' => $this->faker->word,
        'qntGames' => $this->faker->randomDigitNotNull,
        'qntDezenas' => $this->faker->randomDigitNotNull,
        'concurso' => $this->faker->randomDigitNotNull,
        'qntCota' => $this->faker->randomDigitNotNull,
        'qntTotalCota' => $this->faker->randomDigitNotNull,
        'vlCota' => $this->faker->word,
        'vlPremio' => $this->faker->word,
        'dtPremio' => $this->faker->word,
        'base64Img' => $this->faker->text,
        'color' => $this->faker->word,
        'userId' => $this->faker->randomDigitNotNull,
        'created_at' => $this->faker->date('Y-m-d H:i:s'),
        'updated_at' => $this->faker->date('Y-m-d H:i:s')
        ];
    }
}
