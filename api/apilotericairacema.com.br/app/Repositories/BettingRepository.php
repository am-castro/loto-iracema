<?php

namespace App\Repositories;

use App\Models\Betting;
use App\Repositories\BaseRepository;

/**
 * Class BettingRepository
 * @package App\Repositories
 * @version December 27, 2022, 8:49 pm UTC
*/

class BettingRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'type',
        'qntGames',
        'qntDezenas',
        'concurso',
        'qntCota',
        'qntTotalCota',
        'vlCota',
        'vlPremio',
        'dtPremio',
        'base64Img',
        'color',
        'userId'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Betting::class;
    }
}
