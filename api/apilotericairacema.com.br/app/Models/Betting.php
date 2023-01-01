<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Betting
 * @package App\Models
 * @version December 27, 2022, 8:49 pm UTC
 *
 * @property string $type
 * @property integer $qntGames
 * @property integer $qntDezenas
 * @property integer $concurso
 * @property integer $qntCota
 * @property integer $qntTotalCota
 * @property string $vlCota
 * @property string $vlPremio
 * @property string $dtPremio
 * @property string $base64Img
 * @property string $color
 * @property integer $userId
 */
class Betting extends Model
{
    use SoftDeletes;

    use HasFactory;

    public $table = 'bettings';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
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
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'type' => 'string',
        'qntGames' => 'integer',
        'qntDezenas' => 'integer',
        'concurso' => 'integer',
        'qntCota' => 'integer',
        'qntTotalCota' => 'integer',
        'vlCota' => 'string',
        'vlPremio' => 'string',
        'dtPremio' => 'string',
        'base64Img' => 'string',
        'color' => 'string',
        'userId' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'type' => 'required',
        'qntGames' => 'required',
        'qntDezenas' => 'required',
        'concurso' => 'required',
        'qntCota' => 'required',
        'qntTotalCota' => 'required',
        'vlCota' => 'required',
        'vlPremio' => 'required',
        'dtPremio' => 'required'
    ];

    
}
