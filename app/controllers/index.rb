get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/create_user' do
  erb :create_user
end 


post '/home' do 
  @player1= Player.find(name: params[:login1])
  @player2= Player.find(name: params[:login2])
  if @player1 && @player2 
    @game = Game.new
    @game.players << [@player1, @player2]
    @game.save 
    erb :home
  else 
    erb :index
  end 
end 

 post '/create_user' do
  @player1 = Player.new(name: params[:username1])
  @player2 = Player.new(name: params[:username2])
  if @player1.save && @player2.save
    @game = Game.new
    @game.players << [@player1, @player2]
    @game.save 
    erb :home 
  else
      erb :index
  end 
end 

