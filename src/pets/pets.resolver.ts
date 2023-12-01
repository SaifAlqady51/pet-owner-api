import { Resolver, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entity';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService : PetsService){}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petsService.findAll()

    }

}
