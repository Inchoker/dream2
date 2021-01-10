import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule} from './users/user.module';
import {AuthenticationModule} from './authentication/authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://trilh3:TOT%40Fa123@cluster0.hvheb.mongodb.net/dream2?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
    ),
    UserModule,
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
