<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\Betting;

class BettingApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_betting()
    {
        $betting = Betting::factory()->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/bettings', $betting
        );

        $this->assertApiResponse($betting);
    }

    /**
     * @test
     */
    public function test_read_betting()
    {
        $betting = Betting::factory()->create();

        $this->response = $this->json(
            'GET',
            '/api/bettings/'.$betting->id
        );

        $this->assertApiResponse($betting->toArray());
    }

    /**
     * @test
     */
    public function test_update_betting()
    {
        $betting = Betting::factory()->create();
        $editedBetting = Betting::factory()->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/bettings/'.$betting->id,
            $editedBetting
        );

        $this->assertApiResponse($editedBetting);
    }

    /**
     * @test
     */
    public function test_delete_betting()
    {
        $betting = Betting::factory()->create();

        $this->response = $this->json(
            'DELETE',
             '/api/bettings/'.$betting->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/bettings/'.$betting->id
        );

        $this->response->assertStatus(404);
    }
}
