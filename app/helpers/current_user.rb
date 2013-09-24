
def current_player
  @current_player ||= Player.find_by_id(session[:id])
end

