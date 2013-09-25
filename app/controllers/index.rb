get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/create_user' do
  erb :create_user
end 

get '/winner' do
  "Damn, that's a cold-ass honky!"
  erb :_results
end

post '/home' do
  @player1= Player.find_or_create_by(name: params[:player1])
  @player2= Player.find_or_create_by(name: params[:player2])
  if @player1 == @player2
    redirect to "/"
  elsif @player1 && @player2 
    # @game = Game.new
    # @game.players << [@player1, @player2]
    # @game.save 
    erb :home
  else 
    @errors = "Please enter a name"
    redirect to "/#{@errors}"
  end 
end 

 post '/create_user' do
  @player1 = Player.new(name: params[:player1])
  @player2 = Player.new(name: params[:player2])
  if @player1.save && @player2.save
    # @game = Game.new
    # @game.players << [@player1, @player2]
    @game.save 
    erb :home 
  else
    erb :index
  end 
end 

post '/winner' do
  p params['player_id']
  if request.xhr?
    @player = Player.find(params['player_id'])
    @winner_name = Game.create(winner: "#{@player.name}")
    puts @winner_name
  end
"<h1>hey!!!!!1  #{@player.name} has won! </h1>"
end
