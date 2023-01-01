<?php namespace Tests\Repositories;

use App\Models\Betting;
use App\Repositories\BettingRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class BettingRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var BettingRepository
     */
    protected $bettingRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->bettingRepo = \App::make(BettingRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_betting()
    {
        $betting = Betting::factory()->make()->toArray();

        $createdBetting = $this->bettingRepo->create($betting);

        $createdBetting = $createdBetting->toArray();
        $this->assertArrayHasKey('id', $createdBetting);
        $this->assertNotNull($createdBetting['id'], 'Created Betting must have id specified');
        $this->assertNotNull(Betting::find($createdBetting['id']), 'Betting with given id must be in DB');
        $this->assertModelData($betting, $createdBetting);
    }

    /**
     * @test read
     */
    public function test_read_betting()
    {
        $betting = Betting::factory()->create();

        $dbBetting = $this->bettingRepo->find($betting->id);

        $dbBetting = $dbBetting->toArray();
        $this->assertModelData($betting->toArray(), $dbBetting);
    }

    /**
     * @test update
     */
    public function test_update_betting()
    {
        $betting = Betting::factory()->create();
        $fakeBetting = Betting::factory()->make()->toArray();

        $updatedBetting = $this->bettingRepo->update($fakeBetting, $betting->id);

        $this->assertModelData($fakeBetting, $updatedBetting->toArray());
        $dbBetting = $this->bettingRepo->find($betting->id);
        $this->assertModelData($fakeBetting, $dbBetting->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_betting()
    {
        $betting = Betting::factory()->create();

        $resp = $this->bettingRepo->delete($betting->id);

        $this->assertTrue($resp);
        $this->assertNull(Betting::find($betting->id), 'Betting should not exist in DB');
    }
}
