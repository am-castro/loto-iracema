<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\API\CreateBettingAPIRequest;
use App\Http\Requests\API\UpdateBettingAPIRequest;
use App\Models\Betting;
use App\Repositories\BettingRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Response;

/**
 * Class BettingController
 * @package App\Http\Controllers\API
 */

class BettingAPIController extends AppBaseController
{
    /** @var  BettingRepository */
    private $bettingRepository;

    public function __construct(BettingRepository $bettingRepo)
    {
        $this->bettingRepository = $bettingRepo;
    }

    /**
     * Display a listing of the Betting.
     * GET|HEAD /bettings
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $bettings = $this->bettingRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse($bettings->toArray(), 'Bolões Recuperados com sucesso!');
    }

    /**
     * Store a newly created Betting in storage.
     * POST /bettings
     *
     * @param CreateBettingAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateBettingAPIRequest $request)
    {
        $input = $request->all();

        $betting = $this->bettingRepository->create($input);

        return $this->sendResponse($betting->toArray(), 'Bolão salvo com sucesso!');
    }

    /**
     * Display the specified Betting.
     * GET|HEAD /bettings/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Betting $betting */
        $betting = $this->bettingRepository->find($id);

        if (empty($betting)) {
            return $this->sendError('Bolão não encontrado!');
        }

        return $this->sendResponse($betting->toArray(), 'Bolão Encontrado!');
    }

    /**
     * Update the specified Betting in storage.
     * PUT/PATCH /bettings/{id}
     *
     * @param int $id
     * @param UpdateBettingAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateBettingAPIRequest $request)
    {
        $input = $request->all();

        /** @var Betting $betting */
        $betting = $this->bettingRepository->find($id);

        if (empty($betting)) {
            return $this->sendError('Bolão não encontrado!');
        }

        $betting = $this->bettingRepository->update($input, $id);

        return $this->sendResponse($betting->toArray(), 'Bolão Atualizado com sucesso!');
    }

    /**
     * Remove the specified Betting from storage.
     * DELETE /bettings/{id}
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Betting $betting */
        $betting = $this->bettingRepository->find($id);

        if (empty($betting)) {
            return $this->sendError('Bolão não encontrado!');
        }

        $betting->delete();

        return $this->sendSuccess('Bolão deletado com sucesso!');
    }
}
